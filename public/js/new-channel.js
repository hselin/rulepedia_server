(function() {
    var counter = 0;

    var EventSource = {
        'polling':
            { 'polling-interval': { 'description': "Polling interval", 'type': 'number' } },
        'polling-http':
            { 'polling-interval': { 'description': "Polling interval", 'type': 'number' } },
        'sse': {},
        'broadcast-receiver':
            { 'intent-action': { 'description': "Action", 'type': 'text' },
              'intent-category': { 'description': "Category", 'type': 'text' } }
    }

    function addEventSource(trigger) {
        var container = $('<div>', { 'class': 'event-source well' });
        var row;

        counter++;
        row = $('<div>', { 'class': 'form-group' });
        row.append($('<label>', { 'for': 'event-source-id-' + counter }).text("Id"));
        row.append($('<input>', { 'type': 'text', 'class': 'form-control event-source-id', 'id': 'event-source-id-' + counter }));
        container.append(row);

        row = $('<div>', { 'class': 'form-group' });
        row.append($('<label>', { 'for': 'event-source-type-' + counter }).text("Type"));
        var select = $('<select class="form-control event-source-type" id="event-source-type="' + counter +'">' +
            '<option value="polling" selected="selected">Periodic poll</option>' +
            '<option value="polling-http">Periodic HTTP GET</option>' +
            '<option value="sse">Server Sent Events</option>' +
            '<option value="broadcast-receiver">Android Intent BroadcastReceiver</option></select>');
        select.on('change', function() {
            updateParams(select.val());
        })
        row.append(select);
        container.append(row);

        var paramsContainer = $('<div>');
        function updateParams(selected) {
            paramsContainer.empty();

            for (var name in EventSource[selected]) {
                var param = EventSource[selected][name];
                var row = $('<div>', { 'class': 'form-group event-source-param' });
                row.append($('<label>', { 'for': 'event-source-param-' + name + '-' + counter }).text(param.description));
                row.append($('<input>', { 'type': 'text', 'class': 'form-control event-source-param-' + name,
                                          'id': 'event-source-param-' + name + '-' + counter,
                                          'data-param-name': name }));
                paramsContainer.append(row);
            }
        }
        container.append(paramsContainer);
        updateParams('polling');

        row = $('<div>', { 'class': 'form-group' });
        var button = $('<button>', { 'class': 'btn btn-default' }).text("Remove").on('click', function() {
            container.remove();
        });
        row.append(button);
        container.append(row);

        if (trigger == null)
            $('#placeholder-shared-event-sources').append(container);
        else
            trigger.append(container);
    }

    function addTrigger() {
        var container = $('<div>', { 'class': 'trigger well' });
        var row;

        counter++;
        row = $('<div>', { 'class': 'form-group' });
        row.append($('<label>', { 'for': 'trigger-id-' + counter }).text("Id"));
        row.append($('<input>', { 'type': 'text', 'class': 'form-control trigger-id', 'id': 'trigger-id-' + counter }));
        container.append(row);

        row = $('<div>', { 'class': 'form-group' });
        row.append($('<label>', { 'for': 'trigger-description-' + counter }).text("Description"));
        row.append($('<input>', { 'type': 'text', 'class': 'form-control trigger-description', 'id': 'trigger-description-' + counter }));
        container.append(row);

        row = $('<div>', { 'class': 'form-group' });
        row.append($('<label>', { 'for': 'trigger-text-' + counter }).text("Text"));
        row.append($('<input>', { 'type': 'text', 'class': 'form-control trigger-text', 'id': 'trigger-text-' + counter }));
        container.append(row);

        row = $('<div>', { 'class': 'form-group' });
        row.append($('<label>', { 'for': 'trigger-script-' + counter }).text("Code"));
        row.append($('<textarea>', { 'type': 'text', 'class': 'form-control trigger-script code-input', 'id': 'trigger-text-' + counter })
            .val("function trigger(params, events, context) {\n" +
                 "   // @params contains the parameters to your event\n" +
                 "   // @events contains the event data from the shared and private event sources\n" +
                 "   //         as a map from event source id to value (boolean true if the source\n" +
                 "   //         does not produce a value)\n" +
                 "   // @context is an object that you should update with the values generated\n" +
                 "   //          your trigger\n" +
                 "   // use this to store data across executions of the trigger\n" +
                 "   // use the global object to store data shared across all instances of this channel\n" +
                 "   // return true if the trigger fires\n" +
                 "   return true;\n" +
                 "}"));
        container.append(row);

        row = $('<div>', { 'class': 'form-group' });
        var button = $('<button>', { 'class': 'btn btn-default' }).text("Remove").on('click', function() {
            container.remove();
        });
        row.append(button);
        container.append(row);

        $('#placeholder-triggers').append(container);
    }

    function addAction() {
        var container = $('<div>', { 'class': 'action well' });
        var row;

        counter++;
        row = $('<div>', { 'class': 'form-group' });
        row.append($('<label>', { 'for': 'action-id-' + counter }).text("Id"));
        row.append($('<input>', { 'type': 'text', 'class': 'form-control action-id', 'id': 'action-id-' + counter }));
        container.append(row);

        row = $('<div>', { 'class': 'form-group' });
        row.append($('<label>', { 'for': 'action-description-' + counter }).text("Description"));
        row.append($('<input>', { 'type': 'text', 'class': 'form-control action-description', 'id': 'action-description-' + counter }));
        container.append(row);

        row = $('<div>', { 'class': 'form-group' });
        row.append($('<label>', { 'for': 'action-text-' + counter }).text("Text"));
        row.append($('<input>', { 'type': 'text', 'class': 'form-control action-text', 'id': 'action-text-' + counter }));
        container.append(row);

        row = $('<div>', { 'class': 'form-group' });
        row.append($('<label>', { 'for': 'action-script-' + counter }).text("Code"));
        row.append($('<textarea>', { 'type': 'text', 'class': 'form-control action-script code-input', 'id': 'action-text-' + counter })
            .val("function action(params) {\n" +
                 "   // @params contains the parameters to your action\n" +
                 "   // use this to store data across executions of the action\n" +
                 "   // use the global object to store data shared across all instances of this channel\n" +
                 "   // return an object representing the action to take\n" +
                 "   // for HTTP actions, return an object of the form\n" +
                 "   //     { type: 'http', url: 'http://www.example.com/api/v1/ayb', \n" +
                 "   //       method: 'post', data: 'ALL YOUR BASE ARE BELONG TO US' }\n" +
                 "   // (method is optional and defaults to get, data is optional and defaults to empty)\n" +
                 "   // for Intent actions, return an object of the form\n" +
                 "   //     { type: 'intent', action: 'com.example.myapp.AYB', \n" +
                 "   //       category: 'android.category.DEFAULT', package: 'com.example.myapp', \n" +
                 "   //       activity: false }\n" +
                 "   // (category, package and activity are optional, activity defaults to false)\n" +
                 "   return {};\n" +
                 "}"));
        container.append(row);

        row = $('<div>', { 'class': 'form-group' });
        var button = $('<button>', { 'class': 'btn btn-default' }).text("Remove").on('click', function() {
            container.remove();
        });
        row.append(button);
        container.append(row);

        $('#placeholder-actions').append(container);
    }

    function createChannel() {
        return {
            id: $('#channel-id').val(),
            objectId: $('#channel-objectId').val(),
            urlPrefix: $('#channel-urlPrefix').val(),
            urlRegex: $('#channel-urlRegex').val(),
            description: $('#channel-name').val(),
            'event-sources': $('#placeholder-shared-event-sources > .event-source').map(function(index, domSource) {
                var source = {
                    id: $('.event-source-id', domSource).val(),
                    type: $('.event-source-type', domSource).val()
                };
                $('.event-source-param input', domSource).each(function(index) {
                    var param = $(this);
                    var name = param.data('param-name');
                    var value = param.val();
                    source[name] = value;
                });
                return source;
            }).get(),
            triggers: $('#placeholder-triggers > .trigger').map(function(index, domTrigger) {
                var trigger = {
                    id: $('.trigger-id', domTrigger).val(),
                    description: $('.trigger-description', domTrigger).val(),
                    text: $('.trigger-text', domTrigger).val(),
                    script: $('.trigger-script', domTrigger).val()
                };
                // FIXME parameters, generates and event sources
                return trigger;
            }).get(),
            actions: $('#placeholder-actions > .action').map(function(index, domAction) {
                var action = {
                    id: $('.action-id', domAction).val(),
                    description: $('.action-description', domAction).val(),
                    text: $('.action-text', domAction).val(),
                    script: $('.action-script', domAction).val()
                };
                // FIXME parameters, generates and event sources
                return action;
            }).get(),
        };
    }

    $(function() {
        $('#add-new-shared-event-source').on('click', function() {
            addEventSource(null);
        });

        $('#add-new-trigger').on('click', function() {
            addTrigger();
        });

        $('#add-new-action').on('click', function() {
            addAction();
        });

        $('#create-channel').on('click', function() {
            console.log(createChannel());
        })
    });
})()
