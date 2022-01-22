export const formatPlantData = (items) => {
  let plants = items.map((plant) => {
    let id = plant.id;
    let metadata = plant.metadata;

    let categories = metadata.category.items.map((category) => {
      let c = category.category.category_name;
      return c;
    });
    delete metadata.category;
    let p = { id, ...metadata, categories };
    return p;
  });
  return plants;
};
