Each button action should have their handle(action) function, instead of directly implimenting functions in the onClick section

The create useState has a field for setting the prefix.
The create useState also import productFocus to be able to fetch the SN prefix, then append to the form. On submit, this import automatically links the serial number to the highlighted product.

The product remain immutable but visible for consistency. There's a className specific for immutable items.

Partnering end list/ Address List
---
- the UseCurrentUser is exported from SerialNumberPage and imported to SerialNumberEdit. Directly importing currentUser from SerialNumberEdit didn't work. Retrieving this allow the edit page to display a list of partnering end's the current user is owning.
- The address list that allow the user to pick a hiring partnering end is constructed as a dropdown. The dropdown can be toggled with a useState.

Styles.FitTDTitle
---
- A table will automatically rescale everything else if one deviate with special dimensions. `Styles.FitTDTitle` ensure that "Hiring partner" stay on the same line for consistency.

setDisplaySelectedPartneringEnd
---
- The display_partnering_end from Serial Number Book cannot make live updates, but Address Book can in this context. The setDisplaySelectedPartneringEnd in useEffect retrieve its name from the Serail Number Book, and from the Address Book in live updates. This is achieved by passing setDisplaySelectedPartneringEnd to the AddressItem component (bridge) which is talking to the Address Book.