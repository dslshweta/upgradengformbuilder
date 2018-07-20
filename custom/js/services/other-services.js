angular
    .module('formBuilder')
    .factory('OtherServiceHandler', OtherServiceHandler);

function OtherServiceHandler() {

    return {
        'getFormId': getFormId,
        'getDate': getDate
    }

    function getFormId() {
        return (Math.random() + '').substring(2, 10)
            + (Math.random() + '').substring(2, 10);
    }

    function getDate() {
        return Date();
    }

}

