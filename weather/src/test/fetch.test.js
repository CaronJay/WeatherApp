import renderer from 'react-test-renderer';

test('the fetch fails with an error', () => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk')
    .catch(e => expect(e).not.toBe('error'));
  });
 
 //test to check if the weather API is returning
 //an object value and if it fails
 test('API return should be string', () => {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk`)
    .then(data => data.json())
    .then(dataReceived => {
        expect(typeof dataReceived).toBe('object')
    })
 })
 
 