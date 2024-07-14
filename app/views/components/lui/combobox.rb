# frozen_string_literal: true

module Lui
  class Combobox < Base
    def view_template(&)
      div(**attrs, &)
    end

    private

    def default_attrs
      { data: { controller: "lui--combobox", action: "click@window->lui--combobox#clickOutside", lui__combobox_closed_value: "true" } }
    end
  end
end
