angular
    .module('formBuilder')
    .factory('StorageServiceHandler', StorageServiceHandler);

function StorageServiceHandler() {

    return {
        'setFormData': setFormData,
        'getFormData': getFormData,
        'removeFormData' : removeFormData
    }

    //store form defination in localstorage.
    function setFormData(formData) {
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    //get form defination from localstorage.
    function getFormData(){
        return JSON.parse(localStorage.getItem('formData'));
    }

    //remove form defination localstorage
    function removeFormData(){
        localStorage.removeItem('formData');

    }

}


