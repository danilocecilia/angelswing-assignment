/*
Write functions those serialize/deserialize following JS object examples. The function should preserve all data/types.
 (Format for answer: JavaScript)

const example0 = {
  label: 'abcd',
  content: 'HI',
  created: new Date(),
};
const example1 = {
  label: 'afwe',
  created: new Date(2018, 1, 12),
};

const serializer = function () {
};
const deserializer = function () {
};

console.log(serializer(deserializer(serializer(example0))) === serializer(example0));
console.log(serializer(deserializer(serializer(example1))) === serializer(example1));
*/


const example0 = {
    label: 'abcd',
    content: 'HI',
    created: new Date(),
  };
  const example1 = {
    label: 'afwe',
    created: new Date(2018, 1, 12),
  };
  
  const serializer = function (obj) {
      return JSON.stringify(obj);
  };
  const deserializer = function (obj) {
      return JSON.parse(obj);
  };
  
  console.log(serializer(deserializer(serializer(example0))) === serializer(example0));
  console.log(serializer(deserializer(serializer(example1))) === serializer(example1));