angular
    .module('formBuilder')
    .controller('createFormController',createFormController);

createFormController.$inject = ['$rootScope', '$scope', '$stateParams','$state', 'OtherServiceHandler', 'StorageServiceHandler'];

function createFormController($rootScope, $scope, $stateParams,$state, OtherServiceHandler, StorageServiceHandler){


    $scope.formRender = {};

    if($state.current.name = 'create'){
        console.log('111111111111111',$stateParams.obj);

        if($stateParams.obj){
            $scope.formRender =  $stateParams.obj.form
            $rootScope.form = $stateParams.obj.form;
        }
        
    }

    //function assigning
    $scope.createForm = createForm;

    //function calling
    function createForm(data){
        if(!data){
            alert('Form Title is Required');
            return;
        } 

        let formDefination = StorageServiceHandler.getFormData() ? StorageServiceHandler.getFormData(): [];

        let form = $rootScope.form;
        let formTitle = data;
        let formId = OtherServiceHandler.getFormId();
        let createdAt = OtherServiceHandler.getDate();
        let updatedAt = OtherServiceHandler.getDate();

        
        form.formTitle = formTitle;
        form.createdAt = createdAt;
        form.updatedAt = updatedAt;
        form.formId = formId;

        formDefination.push(form); 
        
        StorageServiceHandler.setFormData(formDefination);

    }


    
}