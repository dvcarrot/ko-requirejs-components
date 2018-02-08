define(['knockout', 'text!./my-message.html'], function (ko, template) {

    function viewModel() {
        this.message = 'test'
    }

    return {template: template, viewModel: viewModel}
});
