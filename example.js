// Find more in-depth instructions at: https://devel-docs.bluzelle.com/bluzelle-js/quickstart



const { BluzelleClient } = require('bluzelle');



const bluzelle = new BluzelleClient(
    'ws://test.network.bluzelle.com:51010',

    // This UUID identifies your database and
    // may be changed.
    //
    // Use a service like https://www.uuidgenerator.net to generate a new one

    'ec254b1f-3741-4292-ba2a-ecd43f509bd8'
);



const main = async () => 
{
    await bluzelle.connect();

    await bluzelle.create('myKey', 'myValue');

    console.log(await bluzelle.read('myKey'));

    await bluzelle.disconnect();
};



main().catch(e => 
{ 
    console.log(e.message); 
    bluzelle.disconnect();
});