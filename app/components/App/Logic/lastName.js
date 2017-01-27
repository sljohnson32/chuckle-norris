const lastName = (displayName) => {
  return displayName.split(' ').slice(-1).join(' ');
}

export default lastName;
