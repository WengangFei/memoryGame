199


 HEAD points to the top of the current branch. git can obtain the branch name from that. So it's the same as:

git push origin CURRENT_BRANCH_NAME
but you don't have to remember/type the current branch name. Also it prevents you from pushing to the wrong remote branch by accident.

If you want to push a different branch than the current one the command will not work.
Share
Improve this answer
Follow
