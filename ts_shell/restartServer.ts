import { exec } from 'child_process';
import cron from 'node-cron';

// 定义重启服务器的函数
function restartServer() {
  exec('sudo reboot', (error, stdout, stderr) => {
    if (error) {
      console.error(`执行重启命令时出错: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

// 使用 node-cron 调度任务，每天凌晨3点执行重启服务器的函数
cron.schedule('0 3 * * *', () => {
  console.log('计划任务开始：重启服务器');
  restartServer();
});
