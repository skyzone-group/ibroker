$('.uploader').sortable({
    items: '.img-wrapper',
    cursor: 'move',
    opacity: 0.5,
    containment: '.uploader',
    distance: 20,
    tolerance: 'pointer',
    stop: function () {
        var queue = myDropZone.files;
        newQueue = [];
        $('.img-wrapper').each(function (count, el) {
            var name = el.innerHTML;
            queue.forEach(function (file) {
                if (file.name === name) {
                    newQueue.push(file);
                }
            });
        });
       myDropZone.files = newQueue;  
  }
});
