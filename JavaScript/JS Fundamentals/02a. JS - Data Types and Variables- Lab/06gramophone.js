function gramophone(bandName, albumName, songName) {
  duration = (albumName.length * bandName.length * songName.length) / 2;

  rotations = duration / 2.5;

  console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
