const { sequelize } = require('./db');
const { Restaurant, Menu } = require('./index');
const { seedRestaurant, seedMenu } = require('./seedData');

describe('Restaurant and Menu Models', () => {
  /**
   * Runs the code prior to all tests
   */
  
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  const instMenu = Menu.create({title:'a'});
  const instRestaurant = Restaurant.create({name:'a',location:'b',cuisine:'c'});

  test('can create a Restaurant', async () => {
    // TODO - write test
    
    expect(Restaurant.findByPk(0)).toEqual(instRestaurant);
  });

  test('can create a Menu', async () => {
    // TODO - write test
    
    expect(Menu.findByPk(0)).toEqual(instMenu);
  });

  test('can find Restaurants', async () => {
    // TODO - write test
    expect(Restaurant.findAll({where:{name:'a'}})).toEqual(instRestaurant);
  });

  test('can find Menus', async () => {
    // TODO - write test
    expect(Menu.findAll({where:{title:'a'}})).toEqual(instMenu);
  });

  test('can delete Restaurants', async () => {
    // TODO - write test
    Restaurant.destroy({
      where: {
        name: 'a'
      }
    })
    Menu.destroy({
      where: {
        title: 'a'
      }
    })
    expect(Restaurant.findAll({where:{name:'a'}})).toEqual(Promise.resolve());
    expect(Menu.findAll({where:{title:'a'}})).toEqual(Promise.resolve());
  });
});
