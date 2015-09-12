using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace steam_idle
{
    public partial class frmMain : Form
    {
        private PictureBox picApp;
    
        public frmMain(long appid)
        {
            InitializeComponent();
            picApp.Load("http://cdn.akamai.steamstatic.com/steam/apps/" + appid.ToString() + "/header_292x136.jpg");
        }

        private void frmMain_Load(object sender, EventArgs e)
        {
            
        }

        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(frmMain));
            this.picApp = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.picApp)).BeginInit();
            this.SuspendLayout();
            // 
            // picApp
            // 
            this.picApp.Location = new System.Drawing.Point(0, 0);
            this.picApp.Name = "picApp";
            this.picApp.Size = new System.Drawing.Size(292, 136);
            this.picApp.TabIndex = 0;
            this.picApp.TabStop = false;
            this.picApp.Click += new System.EventHandler(this.pictureBox1_Click);
            // 
            // frmMain
            // 
            this.ClientSize = new System.Drawing.Size(292, 136);
            this.Controls.Add(this.picApp);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "frmMain";
            this.Text = "In Game";
            ((System.ComponentModel.ISupportInitialize)(this.picApp)).EndInit();
            this.ResumeLayout(false);

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }
    }
}
