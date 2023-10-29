import React from 'react';
import ProjectspaceCard from '../../components/projectspacecard';
import AddProjectspaceCard from '../../components/AddProjectspaceCard';
import Toolbar from '../../components/Toolbar';
import StackedLists from '../../components/StackedLists';

const mockProjectspaces = [
  {
    _id: '1',
    name: 'Project 1',
    projectspaceId: '123456',
    role: 'Classified',
    //imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '1',
  },

  {
    _id: '2',
    name: 'Project 2',
    projectspaceId: '123456',
    role: 'UnClassified',
    //imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '2',
  },

];


const ProjectspaceDashboard = ({ handleDelete }) => {
  
  return (
    <div className="flex flex-col pb-8 bg-gray-900 text-white h-screen w-full">
      <Toolbar
        title="Vojo"
        links={[
          {name: 'Tools', href: '#'},
          {name: 'Filters', href: '#'},
          {name: 'Themes', href: '#'}
        ]}
      />

      <div className="pl-8 pr-8 flex flex-wrap space-x-8 mt-6">
        {mockProjectspaces.map(projectspace => (
          <StackedLists key={projectspace._id} projectspace={projectspace} onDelete={handleDelete} />
        ))}
        <AddProjectspaceCard />
      </div>
    </div>
  );
  
};

export default ProjectspaceDashboard;
