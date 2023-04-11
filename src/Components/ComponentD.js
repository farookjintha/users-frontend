import { useState } from 'react';

let nextId = 0;

export default function ComponentD() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  const [toUpdate, setToUpdate] = useState({});

  const handleUpdate = (toUpdate) => {
    let updatedArtists = artists;
    const index = updatedArtists.findIndex(artist => artist.id === toUpdate.id);
    updatedArtists[index] = toUpdate;
    console.log('Updated Artists:', updatedArtists)
    setArtists([...updatedArtists]);
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name} 
          <button onClick={() => setArtists(artists.filter(current => current.id !== artist.id))}>Delete</button>
           <button onClick={() => setToUpdate(artist)}>Edit</button></li>
        ))}
      </ul>
    {toUpdate.name && 
    <div>
        <h3>Updation</h3>
        <input type='text' value={toUpdate.name} onChange={e => setToUpdate({...toUpdate, name: e.target.value})}/>
        <button onClick={() => handleUpdate(toUpdate)}>Update</button>
    </div>}
    </>
  );
}
