#include <iostream>
#include <map>
#include <vector>
using namespace std;

class Solution {
public:
  vector< vector<int> > findWinners(vector< vector<int> > &matches) {
    map<int, int> players;
    vector<int> loses(100001, 0);
    for (int i = 0; i < matches.size(); i++) {
      loses[matches[i][1]]++;
      if (players.find(matches[i][1]) == players.end()) {
        players[matches[i][1]] = 1;
      }
      if (players.find(matches[i][0]) == players.end()) {
        players[matches[i][0]] = 1;
      }
    }

    vector< vector<int> > result(2);
    for (auto it = players.begin(); it != players.end(); it++) {
      if (loses[it->first] == 1) {
        result[1].push_back(it->first);
      } else if (loses[it->first] == 0) {
        result[0].push_back(it->first);
      }
    }
    return result;
  }
};
int main() { cout << "Salam Aleikum" << endl; }