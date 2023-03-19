function greetings(array, object) {
  return `Hello, ${array.join(' ')}! Nice to have a Master ${object.title} ${object.occupation} around.`;
}


console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));
// logs Hello, John Q Doe! Nice to have a Master Plumber around.