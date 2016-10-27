import app           from './server';
import should        from 'should';
import supertest     from 'supertest';

const server = supertest.agent(app);

describe('ObservedProperties API', () => {
  it('should exist', done => {
    server.get('/ObservedProperties')
// XXX      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.be.equal(200);
        done();
      });
  });
});
