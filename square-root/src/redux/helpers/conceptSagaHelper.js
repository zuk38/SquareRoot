export const formatCategoryData = (items) => {
  let categorys = items.map((item) => {
    let tempPlants = item.plants.items.map((plant) => {
      let norwegian_name = plant.plant.norwegian_name ?? '';
      let latin_name = plant.plant.latin_name ?? '';
      let p = { norwegian_name, latin_name };
      return p;
    });
    let category = { ...item, plants: tempPlants };
    return category;
  });
  return categorys;
};

export const formatConceptData = (items) => {
  let tempConcepts = items.map((concept) => {
    let plants = concept.plants.items.map((p) => {
      let id = p.plant.id;
      let metadata = p.plant.metadata;
      let quantity = p.quantity;
      let plant = { id, quantity, ...metadata };
      return plant;
    });
    let c = {
      ...concept,
      plants,
    };
    return c;
  });
  return tempConcepts;
};

/*
truthyObjLoop = (user) => {
    for (var key in user) {
      if (user.hasOwnProperty(key) && !user[key]) delete user[key];
    }
    return user;
  };

  highest = (arr) =>
    (arr || []).reduce(
      (acc, el) => {
        acc.k[el] = acc.k[el] ? acc.k[el] + 1 : 1;
        acc.max = acc.max ? (acc.max < acc.k[el] ? el : acc.max) : el;
        return acc;
      },
      { k: {} }
    ).max;

formatConceptData(items) {
  /*let maintenance = items.map((item) => {
    let tempItems = item.plants.items.map((p) => {
      return p.plant.metadata.sun_seeker;
    });
    return tempItems;
  });
  let m = this.highest(maintenance[0]);*/
/*let tempItems = items.map((item) => {
    let benefits;

    let tempPlants = item.plants.items.map((p) => {
      let id = p.plant.id;
      let metadata = p.plant.metadata;
      let quantity = p.quantity;
      let plant = { id, quantity, ...metadata };
      console.log(plant);
      /*const {
        pollinator_friendly,
        edible,
        pet_kids_friendly,
        air_puryfying,
      } = metadata;

      benefits = {
        pollinator_friendly: pollinator_friendly,
        edible: edible,
        pet_kids_friendly: pet_kids_friendly,
        air_puryfying: air_puryfying,
      };
      this.truthyObjLoop(benefits);*/
/*return plant;
    });
    let concept = {
      ...item,
      plants: tempPlants,
      //benefits: benefits,
      //maintenance: m,
    };
    return concept;
  });
  return tempItems;
}*/
