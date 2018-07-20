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
            Formio.createForm(document.getElementById('renderFormio'), $scope.formList[0]);
        }
    }

    //Assigning functions

    $scope.renderForm = renderForm;
    $scope.editForm = editForm;


    //Definging functions

    function renderForm(form) {

        document.getElementById('renderFormio').innerHTML = '';
        Formio.createForm(document.getElementById('renderFormio'), form).then(function(form) {
            form.on('submit', (submission) => {
              console.log('The form was just submitted!!!',submission);
            });
            form.on('error', (errors) => {
              console.log('We have errors!');
            })
          });
    }

    function editForm(form,index){
        let formObj = {};
        formObj.index = index;
        formObj.form = form;
        $state.go('create', {obj:formObj})
    }

    $scope.$watch('formDef',function(old){
        console.log('watch--------',old);
    })


}