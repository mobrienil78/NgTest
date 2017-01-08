describe("Controller", function () {
    it("starts with no active tab", function () {
        var ctrl = new SomeController();
        expect(ctrl.activeTab).toEqual("");
    });

    it("sets tab 1 active when user hits confirm", function () {
        var ctrl = new SomeController();
        stubConfirmToReturn(true);
        ctrl.tab1Click();
        expect(ctrl.activeTab).toEqual("tab1");
    });

    it("cancels tab 1 navigation if user hits cancel", function () {
        var ctrl = new SomeController();
        stubConfirmToReturn(false);
        ctrl.tab1Click();
        expect(ctrl.activeTab).toEqual("");
    });

    function stubConfirmToReturn(val) {
        window.confirm = function () { return val; }
    }
});