function initializeClearCanvasButton() {
    var btnClearCanvas = document
        .querySelector('#clear-canvas')
        .addEventListener('click', function () {

            kineticStage.removeChildren();

            layersManager = {
                'allLayers': [],
                'current': null
            };

            currentActiveShape = {
                'shape': null,
                'tempLayer': null
            };

            currentColor = '#cc00cc';
        });

    var btnToggleColor = document
        .querySelector('#toggle-color')
        .addEventListener('click', function () {
            getColor();
        });
}