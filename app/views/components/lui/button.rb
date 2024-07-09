# frozen_string_literal: true

module Lui
  class Button < Base
    def initialize(variant: :primary, size: :md, icon: false, **attrs)
      @variant = variant.to_sym
      @size = size.to_sym
      @icon = icon
      super(**attrs)
    end

    def view_template(&)
      button(**attrs, &)
    end

    private

    def size_classes
      if @icon
        case @size
        when :sm
          "h-6 w-6"
        when :md
          "h-9 w-9"
        when :lg
          "h-10 w-10"
        when :xl
          "h-12 w-12"
        end
      else
        case @size
        when :sm
          "px-3 py-1.5 h-8 text-xs"
        when :md
          "px-4 py-2 h-9 text-sm"
        when :lg
          "px-4 py-2 h-10 text-base"
        when :xl
          "px-6 py-3 h-12 text-base"
        end
      end
    end

    def primary_classes
      tokens(
        "whitespace-nowrap inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90",
        size_classes
      )
    end

    def link_classes
      tokens(
        "whitespace-nowrap inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline",
        size_classes
      )
    end

    def secondary_classes
      tokens(
        "whitespace-nowrap inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-opacity-80",
        size_classes
      )
    end

    def destructive_classes
      tokens(
        "whitespace-nowrap inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        size_classes
      )
    end

    def outline_classes
      tokens(
        "whitespace-nowrap inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        size_classes
      )
    end

    def ghost_classes
      tokens(
        "whitespace-nowrap inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",
        size_classes
      )
    end

    def default_classes
      case @variant
      when :primary
        primary_classes
      when :link
        link_classes
      when :secondary
        secondary_classes
      when :destructive
        destructive_classes
      when :outline
        outline_classes
      when :ghost
        ghost_classes
      end
    end

    def default_attrs
      { type: "button", class: default_classes }
    end
  end
end
