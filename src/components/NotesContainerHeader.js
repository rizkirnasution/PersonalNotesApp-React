import React from 'react';
import NotesHeaderSearch from './NotesHeaderSearch';

function NotesContainerHeader({search, onSearchChange}) {
  return (
    <div className='note-app__header'>
      <NotesHeaderSearch 
        search={search}
        onSearchChange={onSearchChange}/>
    </div>
  );
}

export default NotesContainerHeader;