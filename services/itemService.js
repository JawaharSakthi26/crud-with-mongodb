const Item = require('../models/migration');

const getAllItems = async () => {
  return await Item.find();
};

const getItemById = async (id) => {
  return await Item.findById(id);
};

const createItem = async (itemData) => {
  const newItem = new Item(itemData);
  return await newItem.save();
};

const updateItem = async (id, itemData) => {
  return await Item.findByIdAndUpdate(id, itemData, { new: true });
};

const deleteItem = async (id) => {
  return await Item.findByIdAndDelete(id);
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
