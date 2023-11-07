import React, { useContext, useState } from 'react';
import ls from './ContextualControls.less';
import Fa from 'ui/components/Fa';
import { matchAvailableActions } from "../actions";
import { useStream } from "ui/effects";
import { MatchIndex, matchSelection } from "../selectionMatcher";
import { ConstraintButton, GeneratorButton } from "./ConstraintExplorer";
import { Columnizer } from "ui/components/Columnizer";
import { NoIcon } from "../icons/NoIcon";
import { SketcherAppContext } from "./SketcherAppContext";
import cx from 'classnames';

export function ContextualControls() {

  const selection = useStream(ctx => ctx.viewer.streams.selection);
  const ___ = useStream(ctx => ctx.viewer.parametricManager.$update);

  const ctx = useContext(SketcherAppContext);
  const [modification, setModification] = useState(0);

  if (selection.length === 0) {
    return null;
  }
  const obj = selection.length === 1 ? selection[0] : null;

  const availableActions = matchAvailableActions(selection);

  const nonInternalConstraints = obj && Array.from(obj.constraints).filter(c => !c.internal);


  const setRole = (obj, role) => {
    const viewer = ctx.viewer;
    if (obj.aux) {
      return;
    }
    obj.role = role;
    viewer.refresh();
  };

  const tweakRole = (obj) => {
    const viewer = ctx.viewer;
    if (obj.role === 'construction') {
      setRole(obj, null);
    } else if (obj.role === null) {
      setRole(obj, 'construction');
    }
    viewer.refresh();
    //don't know what the side effects of not having this are.
    // code taken from jsketcher/web/app/sketcher/components/SketchObjectExplorer.jsx
    setModification(count => count + 1);
  };

  const getObjectRole = (o) => {
    if (o.aux) {
      return <span title="object is a readonly 3D feature/boundary" className={cx(ls.objectRole, ls.aux)}>B</span>
    } else if (o.role === 'construction') {
      return <span onClick={e => tweakRole(o)} title="construction object not used for 3D operations"
        className={cx(ls.objectRole, ls.construction)}>C</span>
    } else {
      return <span onClick={e => tweakRole(o)} title="sketch object participates in 3D operations"
        className={cx(ls.objectRole, ls.sketch)}>S</span>
    }
  };


  function ObjectIcon({ object }) {
    const Icon = object.icon;
    return <Icon />;
  }

  function getClassName() {
    return null;
  }

  return <div className={ls.root}>

    {
      selection.map(s => <div key={s.id} onDoubleClick={debugEgg(s)} className={ls.item}>
        <span className={cx(ls.objectItem, getClassName(s))}>
          <span className={ls.objectIcon}><ObjectIcon object={s} /></span>
          {getObjectRole(s)}
          <span className={cx(ls.objectTag, s.marked && ls.selected)}>{s.simpleClassName}&nbsp;<span>{s.id}</span> </span>
          <span className={ls.removeButton} onClick={() => ctx.viewer.remove(s)}><Fa icon='times'/></span>
        </span>
      </div>)
    }



    <div className={ls.hr}>AVAILABLE ACTIONS:</div>

    <div style={{
    }}>
      <Columnizer columns={3} spacing={3}>
        {
          availableActions.map(a => {
            const Icon = a.icon || NoIcon;

            return <button
              className='icon-button'
              key={a.id}
              style={{
                width: '100%'
              }}
              onClick={() => a.invoke(ctx, matchSelection(a.selectionMatcher, new MatchIndex(selection), false))}
              title={a.description}><Icon size={16} />{a.shortName}</button>
          })
        }
      </Columnizer>
    </div>
    {
      nonInternalConstraints && nonInternalConstraints.length !== 0 && <>
        <div className={ls.hr}>PARTICIPATES IN CONSTRAINTS:</div>
        {nonInternalConstraints.map(c => <ConstraintButton constraint={c} key={c.id} style={{ borderColor: 'white' }} />)}
      </>
    }
    {
      obj && obj.generators.size !== 0 && <>
        <div className={ls.hr}>PARTICIPATES IN GENERATORS:</div>
        {Array.from(obj.generators).map(c => <GeneratorButton generator={c} key={c.id} style={{ borderColor: 'white' }} />)}
      </>
    }
    {
      obj && obj.generator && <>
        <div className={ls.hr}>GENERATED BY:</div>
        <GeneratorButton generator={obj.generator} style={{ borderColor: 'white' }} />
      </>
    }

  </div>;

}

function debugEgg(obj) {
  return e => {
    obj.visitParams(p => console.log(p.toString()));
  }
}