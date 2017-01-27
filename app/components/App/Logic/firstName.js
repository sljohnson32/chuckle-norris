const firstName = (displayName) => {
  return displayName.split(' ').slice(0, -1).join(' ');
}

export default firstName;
