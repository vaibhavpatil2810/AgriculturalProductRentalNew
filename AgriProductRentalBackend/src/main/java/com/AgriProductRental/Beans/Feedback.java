package com.AgriProductRental.Beans;

public class Feedback {
	private int id;
	private int rating;
	private String comment;
	private User user;
	
	public Feedback(int id, int rating, String comment, User user) {
		super();
		this.id = id;
		this.rating = rating;
		this.comment = comment;
		this.user = user;
	}

	public Feedback() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Feedback [id=" + id + ", rating=" + rating + ", comment=" + comment + ", user=" + user + "]";
	}
	
	
	
}
