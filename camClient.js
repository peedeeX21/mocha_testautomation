function CamClient() {
	
	this.listTasks  = function(arg1, arg2, arg3) {
		return new Promise(function(fulfill, reject) {
			// do some precondition checks
			var testPassed = true;
			if(arg2 < 0) {
				errMsg = 'arg2 should not be less than 0';
				testPassed = false;
			}

			if(testPassed) {
				// all tests are passed, the data can be "loaded"
				var retVal = new Array();
				if(arg1.assignee === 'peter') {
					retVal = new Array({taskno: 123, desc: 'write js tests'}, {taskno: 124, desc: 'have interview'});
				} else if(arg1.assignee === 'daniel') {
					retVal = new Array();
				}
				// fulfill the promise
				fulfill(retVal);
			} else {
				// sth went wrong, reject the promise
				throw Error(errMsg);
			}
		});
	}
};
