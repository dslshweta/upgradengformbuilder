angular
    .module('formBuilder')
    .controller('savedFormController', savedFormController);

savedFormController.$inject = ['$rootScope', '$scope', '$state', 'OtherServiceHandler', 'StorageServiceHandler'];

function savedFormController($rootScope, $scope, $state, OtherServiceHandler, StorageServiceHandler) {

    $scope.formList = [];
    $scope.formDef = {};

    if ($state.current.name == 'saved') {
        $scope.formList = StorageServiceHandler.getFormData()
        if ($scope.formList && $scope.formList.length > 0) {
            $scope.formDef = $scope.formList[0];
        }
    }

    //Assigning functions

    $scope.renderForm = renderForm;
    $scope.editForm = editForm;


    //Definging functions

    function renderForm(form) {
        console.log('ppppppppp',form);
        $scope.formDef = form;
    }

    function editForm(form,index){
        let formObj = {};
        formObj.index = index;
        formObj.form = form;
        $state.go('create', {obj:formObj})
    }


}