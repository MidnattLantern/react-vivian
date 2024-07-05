Each button action should have their handle(action) function, instead of directly implimenting functions in the onClick section

The create useState has a field for setting the prefix.
The create useState also import productFocus to be able to fetch the SN prefix, then append to the form. On submit, this import automatically links the serial number to the highlighted product.