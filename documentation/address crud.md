await in axios

### Address List Refresh in CRUD Operations

Any CRUD functionality will refresh the address list to keep it up to date. To ensure the address list is updated after an `axios` request, include `async` in the event handler function and `await` before the `axios` request.

**Incorrect:**
```jsx
const handleDelete = () => {
  axiosReq.delete(`/address_book/${addressFocus}`);
  fetchAddressList();
}
```

**Correct:**
```jsx
const handleDelete = async () => {
  await axiosReq.delete(`/address_book/${addressFocus}`);
  fetchAddressList();
}
```

Make sure to always use `await` with your `axios` requests within an `async` function.