$(document).ready(function() {
    let activeFilters = [];

    $('.navigation-buttons .custom-btn').click(function() {
        let filterValue = $(this).attr('data-filter');

        // Toggle the 'active' class on the clicked button
        $(this).toggleClass('active');

        // Toggle aria-pressed attribute
        let isActive = $(this).hasClass('active');
        $(this).attr('aria-pressed', isActive);

        // Update activeFilters array
        if (isActive) {
            // If the button is active, add the filter to the activeFilters array
            activeFilters.push(filterValue);
        } else {
            // If the button is not active, remove the filter from the activeFilters array
            activeFilters = activeFilters.filter(function(value) {
                return value !== filterValue;
            });
        }

        // Update the gallery display based on activeFilters
        if (activeFilters.length === 0) {
            // No active filters, show all items
            $('.row .col-xl-4').fadeIn();
        } else {
            // Hide all items initially
            $('.row .col-xl-4').fadeOut(200, function() {
                // After fading out, show items that match any of the active filters
                let selector = activeFilters.map(function(filter) {
                    return '.' + filter;
                }).join(', ');
                $('.row .col-xl-4').filter(selector).fadeIn(200);
            });
        }
    });
});
