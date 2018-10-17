""" Super simple template engine copied from Eric BREHAULT on github. """

    # import string

    # class SuperFormatter(string.Formatter):
    #     """World's simplest Template engine."""

    #     def format_field(self, value, spec):
    #         if spec.startswith('repeat'):
    #             template = spec.partition(':')[-1]
    #             if type(value) is dict:
    #                 value = value.items()
    #             return ''.join([template.format(item=item) for item in value])
    #         elif spec == 'call':
    #             return value()
    #         elif spec.startswith('if'):
    #             return (value and spec.partition(':')[-1]) or ''
    #         else:
    #             return super(SuperFormatter, self).format_field(value, spec)

class SuperFormatter():
    def __init__(self):
        pass

    def format(self, template, **kwargs):
        return template.format_map(kwargs)


