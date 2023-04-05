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
            result = Resource.create();
            allocated.add(result)
        }
    }

    return result;
}

private Deque<Resource> available;
private List<Resource> allocated;