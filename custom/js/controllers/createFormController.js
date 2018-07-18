angular
    .module('formBuilder')
    .controller('createFormController', createFormController);

createFormController.$inject = ['$rootScope', '$scope', '$stateParams', '$state', 'ngDialog', 'OtherServiceHandler', 'StorageServiceHandler'];

function createFormController($rootScope, $scope, $stateParams, $state, ngDialog, OtherServiceHandler, StorageServiceHandler) {

    $rootScope.form = {
        components: [
        ],
        display: "form",
        page: 0
    }

    $scope.formRender = {};
    $scope.editForm = false;
    $scope.editIndex = null;

    if ($state.current.name = 'create') {

        if ($stateParams.obj) {
            $scope.editForm = true;
            $scope.editIndex = $stateParams.obj.index;
            $scope.formTitle = $stateParams.obj.form.formTitle;
            $rootScope.form = $stateParams.obj.form;
        }

    }


    //function assigning
    $scope.createForm = createForm;
    $scope.updateForm = updateForm;

    //function calling
    function createForm(data) {
        if (!data) {
            alert('Form Title is Required');
            return;
        }

        let formDefination = StorageServiceHandler.getFormData() ? StorageServiceHandler.getFormData() : [];

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
        ngDialog.open({
            template: 'createSuccess.html',
            className: 'ngdialog-theme-default',
            width : 500,
            scope: $scope,
        });

    }


    function updateForm() {
        if ($scope.editIndex === null) return
        let formDefination = StorageServiceHandler.getFormData();
        formDefination[$scope.editIndex] = $rootScope.form;
        formDefination[$scope.editIndex].updatedAt = OtherServiceHandler.getDate();
        formDefination[$scope.editIndex].formTitle = $scope.formTitle;
        StorageServiceHandler.removeFormData();
        StorageServiceHandler.setFormData(formDefination);
        ngDialog.open({
            template: 'updateSuccess.html',
            className: 'ngdialog-theme-default',
            width : 500,
            scope: $scope,
        });
    }



}