const PetsDb = () => {
  return {
    petInfo: (pet) => {
      console.log(`Race:${pet.race}, Color:${pet.color}, Age:${pet.age}`);
    },
  };
};

module.exports = PetsDb();
