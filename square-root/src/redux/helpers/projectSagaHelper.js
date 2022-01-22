export const formatProjectsData = (items) => {
  console.log(items);
};

/*formatData = (items) => {
  let tempItems = items.map((item) => {
    let members = item.members.items.map((member) => {
      let name = member.member.name;
      let role = member.member.role;
      let username = member.member.username;
      let m = { name, username, role };
      return m;
    });
    let greenspaces = item.greenspaces.items;
    let project = { ...item, members, greenspaces };
    return project;
  });
  return tempItems;
};*/
