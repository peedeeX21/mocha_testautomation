chai.should();

describe('CamClient', function(){
    
    describe('#listTasks()', function(){

        var camClient;

        before(function() {
            camClient = new CamClient();
            // insert test data into database
        });

        after(function() {
            // maybe remove some test data
        });


        it('should list 2 tasks', function(done){
            camClient.listTasks({assignee: "peter"}, 0, 10)
                .should.eventually.eql(new Array({taskno: 123, desc: 'write js tests'}, {taskno: 124, desc: 'have interview'})).notify(done);
        });

        it('should list 0 tasks', function(done){
            camClient.listTasks({assignee: "daniel"}, 0, 10)
                .should.eventually.eql(new Array()).notify(done);
        });

        it('should be rejected', function(done){
            camClient.listTasks({assignee: "peter"}, -1, 10)
                .should.eventually.be.rejected.notify(done);
        });
    })
});