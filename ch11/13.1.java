public ResourcePool get() {
    Resource result;

    if (available.isEmpty()) {
        result = Resource.create();
        allocated.add(result);
    } else {
        try {
            result = avaliable.pop()
            allocated.add(result);
        } catch (NoSuchElementException e) {
            throws new AssertionError("도달 불가");
        }
    }

    return result;
}

private Deque<Resource> available;
private List<Resource> allocated;