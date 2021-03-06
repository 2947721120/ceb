import {
    element,
    template,
    on,
    dispatchCustomEvent
} from 'ceb';

export const WeatherToolbar = element().builders(
    template(`
        <button type="button" class="btn btn-default"name="togglePlaceFinder" title="find a location">
            <i class="glyphicon glyphicon-search"></i>
        </button>
        <button type="button" class="btn btn-default"name="toggleMap" title="toggle the map">
            <i class="glyphicon glyphicon-map-marker"></i>
        </button>
        <button type="button" class="btn btn-default"name="refreshAll" title="refresh all locations">
            <i class="glyphicon glyphicon-refresh"></i>
        </button>
        <button type="button" class="btn btn-default" name="removeAll" title="erase locations">
            <i class="glyphicon glyphicon-erase"></i>
        </button>
    `),

    on('click').delegate('button[name="togglePlaceFinder"]').skip().invoke(el => {
        dispatchCustomEvent(el, 'toggle-place-finder');
    }),

    on('click').delegate('button[name="toggleMap"]').skip().invoke(el => {
        dispatchCustomEvent(el, 'toggle-map');
    }),

    on('click').delegate('button[name="refreshAll"]').skip().invoke(el => {
        dispatchCustomEvent(el, 'refresh-all-locations');
    }),

    on('click').delegate('button[name="removeAll"]').skip().invoke(el => {
        if (confirm('Do you really want to remove all locations?')) {
            dispatchCustomEvent(el, 'remove-all-locations');
        }
    })
).register('weather-toolbar');
