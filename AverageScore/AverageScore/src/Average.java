import java.util.ArrayList;
import java.util.Collections;


public class Average {
	private ArrayList<Integer> scores;
	private double outlier = .15;
	private double biasTo = 10;
	private double biasAmount = .10;
	public Average() {
		this(new ArrayList<Integer>());
	}
	public Average(ArrayList<Integer> scores) {
		this.scores = scores;
	}
	
	
	public boolean setOutlier(double percent) {
		if(percent>=0 && percent<100) {
			outlier = percent;
			return true;
		}
		return false;
	}
	public boolean removeScore(Integer score) {
		return scores.remove(score);
	}
	public void setBiasTo(double biasTo) {
		this.biasTo = biasTo;
	}
	public void setBiasAmount(double biasAmount) {
		this.biasAmount = biasAmount;
	}
	public void setScores(ArrayList<Integer> scores) {
		this.scores = scores;
	}
	
	
	public ArrayList<Integer> getScores() {
		return scores;
	}
	public double getBiasTo() {
		return biasTo;
	}
	public double getAverage() {
		return 0;
	}
	public void getGoodData() {
		ArrayList<Integer> scores = new ArrayList<Integer>();
		scores = this.scores;
		Collections.sort(scores);
		Collections.
	}
}
