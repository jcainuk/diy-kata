const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    //1 name
    expect(joinNames([{ name: 'Alvin' }])).toEqual('Alvin');
    //2 name
    expect(joinNames([{ name: 'Alvin' }, { name: 'Simon' }])).toEqual('Alvin & Simon');
    //3 names
    expect(joinNames([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])).toEqual('Bart, Lisa & Maggie');


    //5 names 
    expect(joinNames([{ name: 'Mel B' }, { name: 'Mel C' }, { name: 'Victoria' }, { name: 'Geri' }, { name: 'Emma' }])).toEqual('Mel B, Mel C, Victoria, Geri & Emma');


  });
});
