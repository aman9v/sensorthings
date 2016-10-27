import app           from './server';
import should        from 'should';
import supertest     from 'supertest';

const server = supertest.agent(app);

describe('Observations API', () => {
  it('should exist', done => {
    server.get('/Observations')
// XXX      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.be.equal(200);
        done();
      });
  });
});
