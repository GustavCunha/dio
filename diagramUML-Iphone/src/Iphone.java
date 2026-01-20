public class Iphone implements Browser, Telephone, PlayerMusic {

    @Override
    public void play() {
        System.out.println("Playing music");
    }

    @Override
    public void pause() {
        System.out.println("Music paused");
    }

    @Override
    public void selectTrack(String track) {
        System.out.println("Selected track: " + track);
    }

    @Override
    public void makeCall(String phoneNumber) {
        System.out.println("Calling " + phoneNumber);
    }

    @Override
    public void receiveCall(String phoneNumber) {
        System.out.println("Receiving call from " + phoneNumber);
    }

    @Override
    public void endCall() {
        System.out.println("Call ended");
    }

    @Override
    public void navigateTo(String url) {
        System.out.println("Navigating to " + url);
    }

    @Override
    public void refresh() {
        System.out.println("Refreshing page");
    }

    @Override
    public void addToFavorites() {
        System.out.println("Added to favorites");
    }

}
