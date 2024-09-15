const { defineConfig } = require("cypress");
const { seedDatabase } = require("./seedDatabase");



module.exports = defineConfig({
  projectId: '1fqadp',
  //projectId: "TAU",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        seedDatabase: () => {return 'hello world'}
      })
    },
    
    baseUrl : 'http://localhost:3000/',
    viewportHeight: 558,
    viewportWidth: 660
  },
  
});
