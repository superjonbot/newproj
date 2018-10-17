const app = require('../src/app')


test('001 exports.hello', () => {
  expect(app.hello()).toBe('yo world')
})

test('001 exports.feedURI', () => {
    expect(app.feedURI('ae')).toBe('https://feeds.video.aetnd.com/api/ae/videos?filter%5BvideoType%5D=Episode&filter%5BisBehindWall%5D=false&perpage=500')
})

test('001 exports.feedURI', () => {
    expect(app.run()).toBe('...')
})