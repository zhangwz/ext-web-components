/**
 * @class Ext.field.Hidden
 * @extend Ext.field.Text
 * @xtype hiddenfield
 *
 * Hidden fields allow you to easily inject additional data into a {@link Ext.form.Panel form}
 * without displaying additional fields on the screen. This is often useful for sending
 * dynamic or previously collected data back to the server in the same request as the
 * normal form submission. For example, here is how we might set up a form to send
 * back a hidden userId field:
 *```HTML
 *@example({tab: 1})
 *<ext-container layout="center">
 *        <ext-hiddenfield
 *             value="123"
 *             name="hide"
 *         >
 *        </ext-hiddenfield>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *import '@sencha/ext-web-components/dist/ext-hiddenfield.component';
 * 
 *export default class HiddenFieldComponent {}
 *```
 *
 */
/*
 * In the form above we created two fields - a hidden field and a
 * {@link Ext.field.Checkbox check box field}. Only the check box will be visible, but
 * both fields will be submitted. Hidden fields cannot be tabbed to - they are removed
 * from the tab index so when your user taps the next/previous field buttons the hidden
 * field is skipped over.
 *
 * It's easy to read and update the value of a hidden field within a form. Using the
 * example above, we can get a reference to the hidden field and then set it to a new
 * value in 2 lines of code:
 *
 *     var userId = form.down('hiddenfield')[0];
 *     userId.setValue(1234);
 */

/**
 * @cfg {Boolean} [hidden=true]
 * @hide
 */
